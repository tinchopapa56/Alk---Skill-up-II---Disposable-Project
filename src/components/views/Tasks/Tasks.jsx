import {Header} from '../../Header/Header'
import TaskForm from './TaskForm'
import { useEffect, useState } from 'react'
import "./Tasks.styles.css"

const Tasks = () => {

    const[isPhone, setIsPhone] = useState( window.innerWidth < 900 ? true : false )

    const handleResize = () => {
        if (window.innerWidth < 900) setIsPhone(true)
        else setIsPhone(false)
    }
    
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    })

    const limitString = str => {
        if(str.length > 370)
            return { string: str.slice(0,367).concat("..."), addButton: true, }
        return { string: str, addButton: false }
    }

    return(
        <>
            <Header />
            <main id="tasks">
                <TaskForm />
                <section className='wrapper_list'>
                    <div className="list_header"> 
                        <h2> My Tasks </h2>
                    </div>
                {isPhone ? (
                    <div className= "list phone"> 
                    <div className="card"> 
                        <div className="close">x</div>
                        <h3>Tarea 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Julio Avantt!</h5>
                        <button type="button">Nueva</button>
                        <button type="button">Alta</button>
                        <p>Description FAKE</p>
                    </div>
                    <div className="card"> 
                        <div className="close">x</div>
                        <h3>Tarea 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Julio Avantt!</h5>
                        <button type="button">Nueva</button>
                        <button type="button">Alta</button>
                        <p>
                           {limitString(`Tweeting a baseball hunt by 
                            meowing loudly at 5am next to human slave food dis
                            penser but chew iPad power cord, and i will be pet i will be pe
                            t and then i will hiss. of own butt, or cats are fats 
                            i like to pets them they like to meow back. Catty ipsum you are a captiv
                            e audience while sitting on the toilet, pet me but cats are the world, c
                            ar rides are evil but sleeping in the box. Need to chase tail destroy th
                            e blinds or being gorgeous with belly side up. Mark territory put butt i
                            n owner's face i see a bird i stare at it i meow at it i do a wiggle com
                            e here birdy yet asdflkjaertvlkjasntvkjn (sits on keyboard) meowing non 
                            stop for food. Walk on keyboard sit on human yet lick butt, for cat gets
                            stuck in tree firefighters try to get cat down firefighters get stuck i
                            n tree cat eats firefighters' slippers. Eat the fat cats food i dreamt 
                            about fish yum! whatever for brown cats with pink ears but cat cat moo 
                            moo lick ears lick paws so curl up and sleep on the freshly laundered t
                           `).string
                            }
                        </p>
                    </div>
                    <div className="card">
                        <div className="close">x</div> 
                        <h3>Tarea 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Julio Avantt!</h5>
                        <button type="button">Nueva</button>
                        <button type="button">Alta</button>
                        <p>Description FAKE</p>
                    </div>
                </div>
                ):(
                    <div className="list_group">
                        <div className= "list"> 
                            <h4>Nuevas</h4>
                            <div className="card"> 
                                <div className="close">x</div>
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>
                                    {limitString(`Tweeting a baseball hunt by 
                                    meowing loudly at 5am next to human slave food dis
                                    penser but chew iPad power cord, and i will be pet i will be pe
                                    t and then i will hiss. of own butt, or cats are fats 
                                    i like to pets them they like to meow back. Catty ipsum you are a captiv
                                    e audience while sitting on the toilet, pet me but cats are the world, c
                                    ar rides are evil but sleeping in the box. Need to chase tail destroy th
                                    e blinds or being gorgeous with belly side up. Mark territory put butt i
                                    n owner's face i see a bird i stare at it i meow at it i do a wiggle com
                                    e here birdy yet asdflkjaertvlkjasntvkjn (sits on keyboard) meowing non 
                                    stop for food. Walk on keyboard sit on human yet lick butt, for cat gets
                                    stuck in tree firefighters try to get cat down firefighters get stuck i
                                    n tree cat eats firefighters' slippers. Eat the fat cats food i dreamt 
                                    about fish yum! whatever for brown cats with pink ears but cat cat moo 
                                    moo lick ears lick paws so curl up and sleep on the freshly laundered t
                                `).string
                                    }
                             </p>
                            </div>
                            <div className="card"> 
                                <div className="close">x</div>
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                            <div className="card">
                                <div className="close">x</div> 
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                        </div>
                        <div className= "list"> 
                            <h4>En proceso</h4>
                            <div className="card"> 
                                <div className="close">x</div>
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                            <div className="card"> 
                                <div className="close">x</div>
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                            <div className="card">
                                <div className="close">x</div> 
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                        </div>
                        <div className= "list"> 
                            <h4>Finalizado</h4>
                            <div className="card"> 
                                <div className="close">x</div>
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                            <div className="card"> 
                                <div className="close">x</div>
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                            <div className="card">
                                <div className="close">x</div> 
                                <h3>Tarea 1</h3>
                                <h6>24/1/2022</h6>
                                <h5>Julio Avantt!</h5>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                                <p>Description FAKE</p>
                            </div>
                        </div>
                    </div>
                )}    
                </section>
            </main>
        </>
    )
}

export default Tasks