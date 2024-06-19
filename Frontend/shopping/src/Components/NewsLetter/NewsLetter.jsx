import '../NewsLetter/NewsLetter.css'

const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter">
            <h1>Get Your Special Offers Through Email</h1>
            <p>Connect with our Newsletter to get the Latest Updates.</p>
            <div>
                <input 
                type="email"
                placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
      </div>
    </div>
  )
}

export default NewsLetter
