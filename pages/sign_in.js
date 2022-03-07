// import "../styles/form.css";

export default function Form1() {
  return (
    <div class="container">
      <form action="/after_signin">
        <div class="row">
          <div class="col-25">
            <label for="name">Name:</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="name"
              name="name"
              minLength="5"
              placeholder="Your name.."
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="phone">Phone Number:</label>
          </div>
          <div class="col-75">
          <input
              type="text"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              title="10 digit number."
              placeholder="Your phone number.."
              required
            />
          </div>
        </div>
        <br></br>
        <div class="row">
          <button type="submit">SignIn</button>
        </div>
      </form>
    </div>
  );
}
