document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#user-input");
    const message = input.value;
  
    const res = await fetch("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  
    const data = await res.json();
    document.querySelector("#response").textContent = data.reply;
  });
  