import React from 'react'

export const Content = () => {
  return (
    <section id='home' className="content">
        <div className="content-image">
            <img src="src/assets/content-img.jpg" alt="" />
        </div>

        <section id='gallery' className='gallery'>
                <div className="heading">
                    <h1>Gallery-Section</h1>
                </div>

                <div className="card-container">
                  <div className="card"><img src="src/assets/lineart.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/krishna_avtar.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/mother_love.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/pari.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/radha_pencil_art.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/radha_krishna.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/child_radha_krishna.jpg" alt="card-image" /></div>
                  <div className="card"><img src="src/assets/pari3.jpg" alt="card-image" /></div>
                </div>
        </section>

        <section id='about' className="about">
          <div className="heading">
            <h1>About-Section</h1>
          </div>
          <div className="about-content">
          <div className="card">
            <div className="bg"><img src="src/assets/anjali.png" alt="anjali" />
            </div>
            <div className="blob"></div>
          </div>
          <div className="anjali-content">
          <p>Hello! I’m Anjali Kushwaha, an 18-year-old artist from Uttar Pradesh, India, with a passion for
           bringing ideas to life through my artwork. My journey with art has led me to explore various 
           techniques, including outline drawing, detailed pencil sketches, and vibrant color drawings.
            I enjoy capturing the emotions, beauty, and stories of everyday life, and each piece I create
             holds a bit of my perspective and passion.
            Recently, I’ve started offering commissioned artwork, allowing me to share my creativity directly
             with people who appreciate unique, custom-made pieces. Whether it’s a detailed portrait, a delicate
              outline, or a colorful landscape, I take pride in crafting artwork that resonates with each client’s
               vision and adds a personal touch to their space.

            Art has always been more than a hobby for me—it’s a form of expression and connection. I’m excited to
             continue growing as an artist, exploring new styles, and sharing my work with others. If you’re interested
              in a custom piece, feel free to reach out and let’s create something beautiful together!
              </p>
          </div>
          </div>
        </section>

        <section id='order' className="order">
         <h1>Choose Your Pencil Sketch Medium</h1>
         <div className="order-container">
         <div className="order-box">
          <h2>B&W Pencil Sketch from Photo</h2>
          <p>(Most popular)</p>
          <div className="s-box">
            <img src="src/assets/radha_pencil_art.jpg" alt="blank"/>
            <button><a href="https://wa.me/9076732498?text=Hello%2C%20I%27m%20interested%20in%20your%20artwork%21"
                   target="_blank">Order Now</a></button>
          </div>
        </div>
        <div className="order-box">
            <h2>Color Pencil Sketch from Photo</h2>
            <p>(Colored)</p>
            <div className="s-box">
                <img src="src/assets/mother_love.jpg" alt=""/>
                <button><a href="https://wa.me/9076732498?text=Hello%2C%20I%27m%20interested%20in%20your%20artwork%21"
                   target="_blank">Order Now</a></button>
                </div>
        </div>
        <div className="order-box">
            <h2>Line Art Handmade Potrait</h2>
            <p>(Basic outline)</p>
            <div className="s-box">
                <img src="src/assets/lineart.jpg" alt=""/>
                  <button><a href="https://wa.me/9076732498?text=Hello%2C%20I%27m%20interested%20in%20your%20artwork%21"
                   target="_blank">Order Now</a></button>
                 </div>
        </div>
        </div>
        </section>

        <section id="payment-review">
        <h1>How pricing is set?</h1>
        <hr/>
        <p>Setting the price of a handmade pencil sketch involves considering several factors to ensure
            it’s fair to both the artist and the customers. Here are the factors that determine the right prices:</p>
        <p className="para-rev">
        <p>1.<strong>Time and Effort:</strong> The hours spent on sketching, including any revisions or research.</p>
        <p>2.<strong>Materials:</strong> The cost of high-quality pencils, paper, erasers, and other art supplies.</p>
        <p>3.<strong>Skill Level:</strong> The experience and expertise as an artist, which can impact the value of art
            work.</p>
        <p>4.<strong>Market Research:</strong> Similar sketches sold by other artists to get an idea of the prevailing
            prices.</p>
        <p>5.<strong>Profit Margin:</strong> Artist’s reasonable profit margin that makes his efforts worthwhile.</p>
        </p>
    </section>






        </section>
  )
}
