
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  
 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ksirtaj29@gmail.com</h5>
            <a href="mailto:ksirtaj29@gmail.com">Send a message</a>
          </article>
        </div>
        <form action="https://formspree.io/f/mrgjvnqb" method="POST">
                <input id="name" type="text" placeholder="Your Full Name"/>
               
                <input id="email" type="email" placeholder="Your Email"/>
               
                <textarea id="message" name="message" placeholder="Your Message" rows="10"></textarea>
                <input type="submit" value="send message" class="btn"/>
         
        </form>
      </div>

    </section>
  )
}

export default Contact