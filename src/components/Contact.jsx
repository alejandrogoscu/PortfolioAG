import { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const [formRef, isFormVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error al enviar el mensaje');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: '¡Mensaje enviado correctamente!',
      });

      setFormData({ subject: '', name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error to send form', error);
      setStatus({
        submitting: false,
        submitted: true,
        error: true,
        message: error.message || 'Ocurrió un error al enviar el mensaje',
      });
    }
  };

  return (
    <>
      <section className="contact__section" id="contact">
        <h1 className={`contact__title ${isTitleVisible ? 'contact__title--visible' : ''}`} ref={titleRef}>
          Contacto
        </h1>

        <main className="contact__container">
          <form
            className={`contact__form ${isFormVisible ? 'contact__form--visible' : ''}`}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="contact__label contact__subject">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto"
                required
                disabled={status.submitting}
              />
            </label>

            <label className="contact__label contact__name">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={status.submitting}
              />
            </label>

            <label className="contact__label contact__email">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@mail.com"
                required
                disabled={status.submitting}
              />
            </label>

            <label className="contact__label contact__message">
              <textarea
                maxLength="180"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame..."
                required
                disabled={status.submitting}
              />
            </label>

            <div className="contact__button-container">
              {status.submitted && (
                <div
                  className={`contact__notification ${
                    status.error ? 'contact__notification--error' : 'contact__notification--success'
                  }`}
                >
                  {status.message}
                </div>
              )}
              <button className="contact__button" type="submit" disabled={status.submitting}>
                {status.submitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export default Contact;
