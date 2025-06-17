document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const requiredFields = ['firstName', 'lastName', 'email', 'companyType', 'companySize', 'urgency'];
    const allFilled = requiredFields.every(field => data[field]?.trim() !== '');

    if (!allFilled) {
      feedback.textContent = 'Por favor completa todos los campos requeridos.';
      feedback.style.color = 'var(--accent2)';
      return;
    }

    try {
      const response = await fetch('https://dvalenciano.app.n8n.cloud/webhook-test/b31f158a-f887-4456-88a1-a577ecaadd3d', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        feedback.textContent = '¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto pronto.';
        feedback.style.color = 'var(--accent)';
        form.reset();
      } else {
        feedback.textContent = 'Ocurrió un error al enviar el formulario. Intenta de nuevo.';
        feedback.style.color = 'red';
      }
    } catch (error) {
      feedback.textContent = 'Error de conexión. Verifica tu red o contacta al soporte.';
      feedback.style.color = 'red';
    }
  });
});
