## Utah Sandbox Feedback Badge

Add this HTML to your site’s footer to display the Utah Sandbox Feedback Badge.

```html
<!-- Google Fonts: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet">

<footer style="text-align: center; padding: 20px; background-color: #f9f9f9;">
  <div class="badge-wrap" style="position: relative; display: inline-block; max-width: 100%;">
    <!-- Badge image -->
    <img src="https://i.gyazo.com/82b3360e93112b334b9eeed0e0f5a298.png" alt="Utah Sandbox Badge" style="max-width: 100%; height: auto; display: block;">

    <!-- Real Feedback Button overlay -->
    <a href="https://utahinnovationoffice.org/sandbox-feedback/" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="pulse-button">
      Submit Feedback
    </a>
  </div>
</footer>

<style>
/* Base (desktop-first) */
.pulse-button {
  position: absolute;
  bottom: 28%;
  right: 12%;
  background-color: #dca72a;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 30px;
  border: 2px solid #fff;
  font-size: 1.1rem;
  transition: transform 0.2s ease-in-out;
  white-space: nowrap;
}

.pulse-button:hover {
  animation: pulse 0.6s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 900px) {
  .pulse-button {
    bottom: 30%;
    right: 10%;
    font-size: clamp(0.95rem, 2.5vw, 1.05rem);
    padding: clamp(10px, 1.8vw, 12px) clamp(20px, 3.2vw, 28px);
    border-width: 2px;
  }
}

@media (max-width: 600px) {
  .pulse-button {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 34%;
    font-size: clamp(0.9rem, 4vw, 1rem);
    padding: clamp(9px, 3.5vw, 12px) clamp(18px, 6vw, 26px);
    border-width: 2px;
  }
}
</style>

[![Utah Sandbox Feedback Badge](https://i.gyazo.com/82b3360e93112b334b9eeed0e0f5a298.png)](https://utahinnovationoffice.org/sandbox-feedback/)
