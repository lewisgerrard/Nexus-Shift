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
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "400px",
          margin: "1rem",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#1e293b" }}>Portal Login</h1>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email</label>
          <input
            type="email"
            id="email"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              fontSize: "1rem",
            }}
            defaultValue="lewis.gerrard@outlook.com"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Password</label>
          <input
            type="password"
            id="password"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              fontSize: "1rem",
            }}
            defaultValue="password"
          />
        </div>

        <button
          onClick={() => {
            const email = (document.getElementById("email") as HTMLInputElement).value
            const password = (document.getElementById("password") as HTMLInputElement).value

            if (email === "lewis.gerrard@outlook.com" && password === "password") {
              localStorage.setItem(
                "portal-session",
                JSON.stringify({
                  email: "lewis.gerrard@outlook.com",
                  name: "Lewis Gerrard",
                  loggedIn: true,
                  timestamp: Date.now(),
                }),
              )
              window.location.href = "/portal/dashboard"
            } else {
              alert("Invalid credentials")
            }
          }}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#1e293b",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>

        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            textAlign: "center",
          }}
        >
          <p>
            <strong>Demo Credentials:</strong>
          </p>
          <p>Email: lewis.gerrard@outlook.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  )
}
