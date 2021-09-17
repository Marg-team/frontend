import React, {useEffect} from 'react'
import * as styles from './homelessReport.module.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChoiceBtn from './components/choiceBtn/ChoiceBtn'

export default function HomelessReport() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <section>
            <div className={styles.report}>
                <div className={styles.bg}>
                    <svg className={styles.down} width="1500" height="569" viewBox="0 0 1500 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1552.57 0H-42.4331V569H-5.29881L-13.4331 532.52C-13.4331 532.52 154.837 584.278 500.232 464.179C746.436 378.57 929.987 411.944 1115.28 445.635C1189.94 459.209 1264.87 472.835 1344.31 478.751C1445.61 486.297 1510.72 486.361 1552.57 483.411V0Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="816.25" y1="-89.5648" x2="827.712" y2="919.298" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6A9AE7"/>
                                <stop offset="1" stop-color="#281BC8"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.content}>
                    <h1>Report us about any homeless people you see near you.</h1>
                    <div className={styles.card}>
                        <h3>This is the report for</h3>
                        <Router>
                            <Switch>
                                <Route path={`/report/`} exact>
                                    <ChoiceBtn/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </section>
    )
}
