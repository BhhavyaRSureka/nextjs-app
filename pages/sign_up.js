// import "../styles/form.css";

export default function Form() {
  return (
    <div class="container">
      <form action="/after_signup">
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
            <label for="email">Email:</label>
          </div>
          <div class="col-75">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email id.."
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
        <div class="row">
          <div class="col-25">
            <label for="address">Address:</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your Address.."
              minLength="10"
              required
            />
          </div>
        </div>
        <br></br>
        <div class="row">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
