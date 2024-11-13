*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    background: linear-gradient(
        135deg,
        #ffcf1b,
        #ff8b1b
    );
}
.container{
    width: 45%;
    min-width: 500px;
    background-color: #ffffff;
    padding: 40px 30px;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0,0,0,0.15);
}
.scores{
    margin-bottom: 50px;
    text-align: right;
}
.weapons{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
}
.weapons button{
    background-color: #ffd51b;
    color: #000000;
    border: none;
    font-size: 50px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
}
.details{
    margin-top: 30px;
    text-align: center;
}
.scores,.details{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 15px;
}
#result{
    width: 180px;
    padding: 10px 0;
    margin: 30px auto;
    font-weight: 600;
    letter-spacing: 0.5px;
}
#user_choice,
#computer_choice{
    font-weight: 400;
    margin-bottom: 10px;
}
span{
    font-weight: 600;
}