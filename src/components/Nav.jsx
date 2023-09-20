// rrd imports
import { Form, NavLink } from "react-router-dom"
import { TrashIcon } from '@heroicons/react/24/solid'


const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <span>Budgeta</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Logout</span>
              <TrashIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav