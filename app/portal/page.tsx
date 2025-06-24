export default function PortalPage() {
  return (
    <html>
      <head>
        <title>Portal Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #1e293b;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }
          
          .container {
            width: 100%;
            max-width: 28rem;
          }
          
          .card {
            background-color: white;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 2rem;
          }
          
          .header {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .icon {
            width: 4rem;
            height: 4rem;
            background-color: #1e293b;
            border-radius: 0.75rem;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }
          
          .subtitle {
            color: #64748b;
          }
          
          .form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .field {
            display: flex;
            flex-direction: column;
          }
          
          .label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.5rem;
          }
          
          .input {
            width: 100%;
            padding: 0.5rem 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            font-size: 0.875rem;
          }
          
          .input:focus {
            outline: none;
            border-color: #1e293b;
          }
          
          .message {
            padding: 0.75rem;
            font-size: 0.875rem;
            border-radius: 0.375rem;
            display: none;
          }
          
          .error {
            color: #dc2626;
            background-color: #fef2f2;
            border: 1px solid #fecaca;
          }
          
          .success {
            color: #16a34a;
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
          }
          
          .button {
            width: 100%;
            background-color: #1e293b;
            color: white;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          
          .button:hover {
            background-color: #0f172a;
          }
          
          .button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .loading {
            display: none;
            align-items: center;
            justify-content: center;
          }
          
          .spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid transparent;
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 0.5rem;
          }
          
          .demo {
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: #f8fafc;
            border-radius: 0.5rem;
            text-align: center;
          }
          
          .demo-title {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 0.5rem;
          }
          
          .demo-creds {
            font-size: 0.75rem;
            font-family: monospace;
            color: #374151;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="card">
            <div className="header">
              <div className="icon">
                <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="title">Portal Access</h1>
              <p className="subtitle">Sign in to manage your clients</p>
            </div>

            <form className="form" id="loginForm">
              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input className="input" id="email" type="email" required placeholder="lewis.gerrard@outlook.com" />
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input className="input" id="password" type="password" required placeholder="password" />
              </div>

              <div className="message error" id="error"></div>
              <div className="message success" id="success"></div>

              <button className="button" type="submit" id="submitButton">
                <span id="buttonText">Sign In</span>
                <span className="loading" id="buttonLoading">
                  <span className="spinner"></span>
                  Signing in...
                </span>
              </button>
            </form>

            <div className="demo">
              <p className="demo-title">Demo Credentials:</p>
              <div>
                <p className="demo-creds">lewis.gerrard@outlook.com</p>
                <p className="demo-creds">password</p>
              </div>
            </div>
          </div>
        </div>

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
              buttonLoading.style.display = 'flex';
              errorDiv.style.display = 'none';
              successDiv.style.display = 'none';
              submitButton.disabled = true;
              
              setTimeout(function() {
                if (email === 'lewis.gerrard@outlook.com' && password === 'password') {
                  try {
                    const sessionData = {
                      email: 'lewis.gerrard@outlook.com',
                      name: 'Lewis Gerrard',
                      loggedIn: true,
                      timestamp: Date.now()
                    };
                    
                    localStorage.removeItem('portal-session');
                    localStorage.setItem('portal-session', JSON.stringify(sessionData));
                    
                    successDiv.textContent = 'Login successful! Redirecting...';
                    successDiv.style.display = 'block';
                    
                    setTimeout(function() {
                      window.location.href = '/portal/dashboard';
                    }, 1500);
                    
                  } catch (e) {
                    errorDiv.textContent = 'Failed to save session. Please try again.';
                    errorDiv.style.display = 'block';
                    buttonText.style.display = 'inline';
                    buttonLoading.style.display = 'none';
                    submitButton.disabled = false;
                  }
                } else {
                  errorDiv.textContent = 'Invalid credentials. Use: lewis.gerrard@outlook.com / password';
                  errorDiv.style.display = 'block';
                  buttonText.style.display = 'inline';
                  buttonLoading.style.display = 'none';
                  submitButton.disabled = false;
                }
              }, 1000);
            });
          `,
          }}
        />
      </body>
    </html>
  )
}
