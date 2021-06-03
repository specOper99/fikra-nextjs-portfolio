export default function () {
    return (<section className="contact">
        <div className="container">
            <h3 className="title">Contact me</h3>
            <form className="contact-form">
                <input type="text" name="name" id="name" placeholder="name" />
                <input type="email" name="email" id="email" placeholder="email" />
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="subject"
                />
                <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="message"
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
    );
}