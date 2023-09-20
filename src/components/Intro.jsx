import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/money-01.png";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1 className="accent">
          Take Control of Your Money
        </h1>
        <p style={{color:"#fff"}}>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Enter your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro