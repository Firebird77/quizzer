
import React, { Component } from 'react'
import './style.css'
import {QuizData } from './Quizdata'
import Score from './Score'




export class Main extends Component {
     constructor(props){
            super(props)
        
            this.state = {
                  
                    userAnswer:null,    //current users answer
                    currentIndex: 0,  //current questions index
                    options: [],       //the four options
                    quizEnd: false, //True if it's the last question
                    score: 0,      //the Score
                    disabled: true,
                    count : 0,

                
            }}





            doIntervalChange = () => {
                this.myInterval = setInterval(() => {
                this.setState(prevState => ({
                  count: prevState.count - 1
                }))
              }, 100)
            }
          
           
            
            
            
           loadQuiz = () => {
                const {currentIndex} = this.state //get the current index
                this.setState(() => {
                return {
                        question: QuizData[currentIndex].question,
                        options : QuizData[currentIndex].options,
                        answer: QuizData[currentIndex].answer          
                    }
                }
                )
            } 

             nextQuestionHander = () => {
                const {userAnswer, answer, score} = this.state
                if(userAnswer === answer){
                    this.setState({
                        score: score + 1
                  })
                }else{
                    this.setState({
                        score: score - 1
                  })

                }
                 
               

                
                
                
                this.setState({
                    currentIndex: this.state.currentIndex + 1
                })

                const startCount = '100'
                this.setState({
                  count: startCount
                })


            }

            componentDidMount(){
            
                this.loadQuiz();
                const startCount = '100'
                this.setState({
                count: startCount
                 })
                 this.doIntervalChange()

                
            }

            start=()=> {
                const startCount = '100'
                this.setState({
                  count: startCount
                })
             }

             clear =()=> {
                clearInterval(this.myInterval)
              }


            checkAnswer = answer => {
                this.setState({
                    userAnswer: answer,
                    disabled:false
                })
                
            }

            componentDidUpdate(prevProps, prevState){
                const{currentIndex} = this.state;
                if(this.state.currentIndex !== prevState.currentIndex){
                    this.setState(() => {
                        return {
                            disabled: true,
                            question: QuizData[currentIndex].question,
                            options : QuizData[currentIndex].options,
                            answer: QuizData[currentIndex].answer          
                        }
                    });
                  
                }
                if (prevState.count === 1){
                    this.finishHandler()
                    this.nextQuestionHander()
                   }
              
                   
            }


            finishHandler =() => {
                if(this.state.currentIndex === QuizData.length -2){
                    this.setState({
                        quizEnd:true
                    })               
                     clearInterval(this.myInterval)

                 

                }




             


            }


            render() {
         const{question, options, currentIndex, userAnswer, quizEnd, count, score}= this.state


           if(quizEnd){
               return(<Score score={score}></Score>
               )
           }
 
        
            return (
                <div>
                      <header >
                <h1 className="logo main">Quizzer</h1>
                  
               
                </header>
        
                <div className="container game">
                

                 <div className="card first">
                   <div className="content">
                   <div className="nbr-qst">{`${currentIndex+1}/${QuizData.length-1}`}</div>
                 
                   <div className="prog-bar">
                   <div className="bar"style={{width:`${+count}%`}}></div>
                  </div>
        
                  <div className="container-content">
                  <div className="rep-box">
                  <p className="qst">{question}</p>
             
                  {
                      options.map(option => <button key={option.id}  className={(`rep ${userAnswer === option? "bon": null}`)}
                      onClick={() =>
                      {
                          this.checkAnswer(option)
                        
                          } }>
                          {option}
                          </button> )
                  }

                          <button onClick={()=>
                            {this.finishHandler()
                                this.nextQuestionHander()
                            }
                            } className="rep validé" >Valider</button>

                 
                </div>
                        
                  </div>
                  </div>
                </div>
                 
         
                </div>
                <footer className="footer">
        
        <p>Développé par <span style={{color:"#D37E2B" }}>Randy Lele Talla</span>.</p>
            </footer>
                </div>
            )
    }
}

export default Main


