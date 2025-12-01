export default function Contact() {
  return (
    <div className="max-w-md mx-auto ">
      <div className="card">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form
          action="https://formsubmit.co/jyotimoykatharon@gmail.com"
          method="POST"
          autoComplete="off"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            className="input-box"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="input-box"
            placeholder="Your Email"
            required
          />
          <textarea
            className="input-box"
            rows="4"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn-primary" type="submit">
            Send Message
          </button>

          {/* FormSubmit settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="http://127.0.0.1:5173/thank-you"
          />
        </form>
      </div>
    </div>
  );
}
