export const Contact=()=>{
    return(
        <div className="contact" id="contact" >
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <lable >Name</lable>
                        <input type="text" required placeholder="Enter your Name"/>
                    </div>
                    <div>
                        <lable >Email</lable>
                        <input type="email" required placeholder="Enter your Email.."/>
                    </div>
                    <div>
                        <lable >Message</lable>
                        <input type="text" required placeholder="Tell Us about your Query.."/>
                    </div>
                 
                    <button type="submit">Submit</button>

                </form>
            </main>

        </div>
    )
}