document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName   = form.firstName.value.trim();
    const lastName    = form.lastName.value.trim();
    const email       = form.email.value.trim();
    const companyType = form.companyType.value;
    const companySize = form.companySize.value;
    const urgency     = form.urgency.value;

    if (!firstName || !lastName || !email || !companyType || !companySize || !urgency) {
      feedback.textContent = 'Por favor completa todos los campos requeridos.';
      feedback.style.color = 'var(--accent2)';
      return;
    }

    // Aquí podrías enviar los datos a tu API o servicio de correo
    feedback.textContent = '¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto pronto.';
    feedback.style.color = 'var(--accent)';
    form.reset();
  });
});
