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

  const [contactRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', FormData);
    setFormData({ subject: '', name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="contact__section" id="contact">
        <h1 className="contact__title">Contacto</h1>

        <main className="contact__container">
          <form
            className={`contact__form ${isVisible ? 'contact__form--visible' : ''}`}
            ref={contactRef}
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
              />
            </label>
            <button className="contact__button" type="submit">
              Enviar
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default Contact;
