import React from "react";
import "./style.css";

function Skills() {
  return (
    <section className="hero is-medium" id="skillsSec">
      <h1 className="title is-1 has-text-centered has-text-white is-family-monospace mt-5">
        Skill Set
      </h1>
      <div className="columns has-same-height is-gapless">
        <div className="column">
          {/* <!-- Front End --> */}
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4 has-text-black">Front-End</h3>

              <div className="content">
                <table className="table-profile">
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      JQuery
                    </td>
                  </tr>
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      React
                    </td>
                  </tr>
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      CSS
                    </td>
                  </tr>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="column">
          {/* <!-- Backend --> */}
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4 has-text-black">Back-End</h3>

              <div className="content">
                <table className="table-profile">
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      Express
                    </td>
                  </tr>
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      MySql
                    </td>
                  </tr>
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      MongoDB
                    </td>
                  </tr>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="column">
          {/* <!-- Other --> */}
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4 has-text-black">Other</h3>

              <div className="content">
                <table className="table-profile">
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      JavaScript
                    </td>
                  </tr>
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      NodeJs
                    </td>
                  </tr>
                  <tr>
                    <td className="is-size-4 is-family-monospace has-text-white">
                      Git
                    </td>
                  </tr>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
