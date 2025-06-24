"use client"

export default function PortalPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "28rem" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            padding: "2rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                width: "4rem",
                height: "4rem",
                backgroundColor: "#1e293b",
                borderRadius: "0.75rem",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                style={{ width: "2rem", height: "2rem", color: "white" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e293b", marginBottom: "0.5rem" }}>
              Portal Access
            </h1>
            <p style={{ color: "#64748b" }}>Sign in to manage your clients</p>
          </div>

          <form id="loginForm" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                }}
                placeholder="lewis.gerrard@outlook.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.5rem",
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                }}
                placeholder="password"
              />
            </div>

            <div
              id="error"
              style={{
                display: "none",
                padding: "0.75rem",
                fontSize: "0.875rem",
                color: "#dc2626",
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "0.375rem",
              }}
            ></div>

            <div
              id="success"
              style={{
                display: "none",
                padding: "0.75rem",
                fontSize: "0.875rem",
                color: "#16a34a",
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "0.375rem",
              }}
            ></div>

            <button
              type="submit"
              id="submitButton"
              style={{
                width: "100%",
                backgroundColor: "#1e293b",
                color: "white",
                fontWeight: "500",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
            >
              <span id="buttonText">Sign In</span>
              <span id="buttonLoading" style={{ display: "none" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "1rem",
                    height: "1rem",
                    border: "2px solid transparent",
                    borderTop: "2px solid white",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    marginRight: "0.5rem",
                  }}
                ></span>
                Signing in...
              </span>
            </button>
          </form>

          <div style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "0.5rem" }}>
            <p style={{ fontSize: "0.875rem", color: "#64748b", textAlign: "center", marginBottom: "0.5rem" }}>
              Demo Credentials:
            </p>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#374151" }}>
                lewis.gerrard@outlook.com
              </p>
              <p style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#374151" }}>password</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('error');
            const successDiv = document.getElementById('success');
            const buttonText = document.getElementById('buttonText');
            const buttonLoading = document.getElementById('buttonLoading');
            const submitButton = document.getElementById('submitButton');
            
            // Show loading
            buttonText.style.display = 'none';
            buttonLoading.style.display = 'inline-flex';
            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';
            submitButton.disabled = true;
            
            setTimeout(function() {
              if (email === 'lewis.gerrard@outlook.com' && password === 'password') {
                // Create session data
                const sessionData = {
                  email: 'lewis.gerrard@outlook.com',
                  name: 'Lewis Gerrard',
                  loggedIn: true,
                  timestamp: Date.now()
                };
                
                try {
                  // Clear any existing session first
                  localStorage.removeItem('portal-session');
                  
                  // Set new session
                  localStorage.setItem('portal-session', JSON.stringify(sessionData));
                  
                  // Verify session was saved
                  const savedSession = localStorage.getItem('portal-session');
                  const parsedSession = JSON.parse(savedSession);
                  
                  if (parsedSession && parsedSession.loggedIn === true) {
                    console.log('Session verified:', parsedSession);
                    
                    // Show success message
                    successDiv.textContent = 'Login successful! Redirecting to dashboard...';
                    successDiv.style.display = 'block';
                    
                    // Redirect after verification
                    setTimeout(function() {
                      console.log('Redirecting to dashboard...');
                      window.location.href = '/portal/dashboard';
                    }, 1500);
                  } else {
                    throw new Error('Session verification failed');
                  }
                  
                } catch (e) {
                  console.error('Session error:', e);
                  errorDiv.textContent = 'Failed to save login session. Please try again.';
                  errorDiv.style.display = 'block';
                  buttonText.style.display = 'inline';
                  buttonLoading.style.display = 'none';
                  submitButton.disabled = false;
                }
              } else {
                // Show error
                errorDiv.textContent = 'Invalid credentials. Please use: lewis.gerrard@outlook.com / password';
                errorDiv.style.display = 'block';
                
                // Hide loading
                buttonText.style.display = 'inline';
                buttonLoading.style.display = 'none';
                submitButton.disabled = false;
              }
            }, 1000);
          });
        `,
        }}
      />
    </div>
  )
}
