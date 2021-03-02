import React from "react";
import "./style.css"

function Skills(){
    return(
        <section class="hero is-medium" id="skillsSec">
        <h1 class="title is-1 has-text-centered has-text-white is-family-monospace mt-5">Skill Set</h1>
        <div class="columns has-same-height is-gapless">
            <div class="column">
                {/* <!-- Front End --> */}
                <div class="card">
                    <div class="card-content">
                        <h3 class="title is-4 has-text-black">Front-End</h3>

                        <div class="content">
                            <table class="table-profile">
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">JQuery</td>
                                </tr>
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">React</td>

                                </tr>
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">CSS</td>
                                </tr>
                            </table>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
            <div class="column">
                {/* <!-- Backend --> */}
                <div class="card">
                    <div class="card-content">
                        <h3 class="title is-4 has-text-black">Back-End</h3>

                        <div class="content">
                            <table class="table-profile">

                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">Express</td>

                                </tr>
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">MySql</td>

                                </tr>
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">MongoDB</td>

                                </tr>
                            </table>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
            <div class="column">
                {/* <!-- Other --> */}
                <div class="card">
                    <div class="card-content">
                        <h3 class="title is-4 has-text-black">Other</h3>

                        <div class="content">
                            <table class="table-profile">
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">JavaScript</td>

                                </tr>
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">NodeJs</td>

                                </tr>
                                <tr>
                                    <td class="is-size-4 is-family-monospace has-text-white">Git</td>

                                </tr>
                            </table>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Skills;