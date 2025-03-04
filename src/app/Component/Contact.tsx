const ContactForm = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-left">
                <h2>Contact <span>Me</span></h2>
                <h3>Let&apos;s Work Together</h3>
                <p> I&apos;m always excited to collaborate on innovative projects, whether it&apos;s building from scratch or enhancing existing applications.</p>
            </div>

            <div className="contact-right">
                <form>
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your Email" />
                    <input type="text" placeholder="Enter Your Subject" />
                    <textarea placeholder="Enter Your Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
