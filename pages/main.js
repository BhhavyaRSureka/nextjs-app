// import "../styles/form.css";

import Link from "next/link";

export default function Form2() {
  return (
    <div class="container0">
      <div class="container1">
        <div class="row1">
          <Link href="/sign_in">
            <a>
              <button>SignIn</button>
            </a>
          </Link>
        </div>

        <br></br>
        <br></br>
        <div class="row1">
          <Link href="/sign_up">
            <a>
              <button>SignUp</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
