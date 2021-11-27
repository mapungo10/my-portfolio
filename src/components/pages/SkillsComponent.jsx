import React, {useState} from 'react'
import PageHeaderComponent from '../globals/PageHeaderComponent'
import SkillsCardComponent from '../globals/SkillsCardComponent'
import Html from '../../assets/media/images/html5.png'
import JavaScript from '../../assets/media/images/js.jpg'
import JQuery from '../../assets/media/images/jquery.png'
import Sass from '../../assets/media/images/sass.png'
import Bootstrap from '../../assets/media/images/bootstrap.jpg'
import ReactJs from '../../assets/media/images/reactjs.png'
import Php from '../../assets/media/images/php.jpg'
import Laravel from '../../assets/media/images/laravel.jpg'
import RestAPI from '../../assets/media/images/api.png'
import JSON from '../../assets/media/images/json.png'
import MySql from '../../assets/media/images/mysql.png'
import Github from '../../assets/media/images/github.png'
import Git from '../../assets/media/images/git.png'

const SkillsComponent = () => {
    // ================== states ====================
    const [f_skills] = useState([
        {
            image: Html,
            skill: 'Html5'
        },
        {
            image: JavaScript,
            skill: 'javaScript'
        },
        {
            image: JQuery,
            skill: 'jQuery'
        },
        {
            image: Sass,
            skill: 'Sass'
        },
        {
            image: Bootstrap,
            skill: 'Bootstrap'
        },
        {
            image: ReactJs,
            skill: 'Reactjs'
        },
    ])
    const [b_skills] = useState([
        {
            image: Php,
            skill: 'pHp'
        },
        {
            image: Laravel,
            skill: 'Laravel'
        },
        {
            image: RestAPI,
            skill: 'RestFul API'
        },
        {
            image: JSON,
            skill: 'jSON'
        },
        {
            image: MySql,
            skill: 'MysqlDB'
        },
    ]);
    const [vc_skills] = useState([
        {
            image: Git,
            skill: 'GIT'
        },
        {
            image: Github,
            skill: 'GitHub'
        },
    ])

    // ====================== return ====================
    return (
        <>
            {/* ============= pageheader =============== */}
                <PageHeaderComponent title="Technical skills" subTitle="Technologies which i can work with" />

            {/* ============== content ================= */}
                <div className="page-content-con mb-5">
                    <div className="container-fluid">
                        {/* ========================= front-end skills ================== */}
                        <div className="row">
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">Front-end development skills</h3>
                                        <div className="container-fluid">
                                            <div className="row">
                                                {
                                                    f_skills.map(skill => (
                                                        <SkillsCardComponent image={skill.image} skill={skill.skill}/>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========================= backend skills =================== */}
                        <div className="row">
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">Back-end development skills</h3>
                                        <div className="container-fluid">
                                            <div className="row">
                                                {
                                                    b_skills.map(skill => (
                                                        <SkillsCardComponent image={skill.image} skill={skill.skill}/>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========================= backend skills =================== */}
                        <div className="row">
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">Vision control skills</h3>
                                        <div className="container-fluid">
                                            <div className="row">
                                                {
                                                    vc_skills.map(skill => (
                                                        <SkillsCardComponent image={skill.image} skill={skill.skill}/>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SkillsComponent

