import React from "react";
import ph1 from '../src/images/pexels-kirill-lazarev-8288620.jpg';
import ph2 from '../src/images/pexels-max-mishin-10025728.jpg';
import ph3 from '../src/images/pexels-max-mishin-10026140.jpg';
import ph4 from '../src/images/pexels-julia-volk-5769345.jpg';
import ph5 from '../src/images/pexels-maria-ovchinnikova-7925654.jpg';
import ph6 from '../src/images/pexels-kirill-lazarev-8288624.jpg';
import ph7 from '../src/images/pexels-konstantin-abramov-8906245.jpg';
import ph8 from '../src/images/pexels-kassandra-10442711.jpg';
import ph9 from '../src/images/pexels-julia-volk-5769344.jpg';

export const Album = () => {
    return (
        <>
        <main>

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Nature Connection Exercise</h1>
      <p class="lead text-muted">The absence of a deep emotional connection between humans and the natural world is at the root of the environmental crisis. Can you think of a place in nature that you know really well? Close your eyes for a moment and see what comes up. Can you visualise the place in exquisite detail? </p>
      <p>
      {/*<a href="#" class="btn btn-primary my-2">Main call to action</a>*/}
        <a href="mailto:alpernksenia@gmail.com" class="btn btn-secondary my-2">Your feedback</a>
    
      </p>
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
        <img src={ph1} alt='here should be a forest'  />
          <div class="card-body">
            <p class="card-text">The world is animated by the wind. This invisible, mysterious force can bring a landscape alive. Its absence can cast a calm stillness over the earth.</p>
            <div class="d-flex justify-content-between align-items-center">
            
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
        <img src={ph2} alt='here should be mountains'  />

          <div class="card-body">
            <p class="card-text">What brought me back to the present moment?

The familiar feeling of a fly landing on my face. Except this time my natural response was to smile.</p>
            <div class="d-flex justify-content-between align-items-center">
             
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
        <img src={ph3} alt='here should be mountains'  />
          <div class="card-body">
            <p class="card-text">When something is completely beyond your control see for yourself which causes you more suffering… resistance or allowing it to be as it is?</p>
            <div class="d-flex justify-content-between align-items-center">
              
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
        <img src={ph4} alt='here should be a sea' />
          <div class="card-body">
            <p class="card-text">Think back to when you were very young. What did you love to do back then? What were you really interested in? Did you have a natural inclination towards something? </p>
            <div class="d-flex justify-content-between align-items-center">
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
        <img src={ph5} alt='here should be a river' />

          <div class="card-body">
            <p class="card-text"> You need to find out for yourself. Carry out your own experiment. Sit quietly under a tree and see what happens when you allow EVERYTHING to be exactly as it is.</p>
            <div class="d-flex justify-content-between align-items-center">
             
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
        <img src={ph6} alt='here should be mountains' />

          <div class="card-body">
            <p class="card-text">Does society make it easy for a person to discover what their talent is and does it enable them to cultivate that talent? Does it teach children to question themselves?</p>
            <div class="d-flex justify-content-between align-items-center">
              
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
        <img src={ph7} alt='here should be mountains' />
          <div class="card-body">
            <p class="card-text">In a very real sense, mountains and valleys, the seas and the skies, the sun and the earth, the trees and the flowers constitute our home, our natural habitat.</p>
            <div class="d-flex justify-content-between align-items-center">
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
        <img src={ph8} alt='here should be forests' />

          <div class="card-body">
            <p class="card-text">We are all agents of change in our environment and the choices we make and the actions we take shape our experience and the world in which we live.</p>
            <div class="d-flex justify-content-between align-items-center">
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          
          <img src={ph9} alt='here should be a sea' />
          <div class="card-body">
            <p class="card-text">Can you imagine that you might actually do something immediate and tangible to help protect this place? Be honest with yourself. Please don’t rush. Take a moment to connect.</p>
            <div class="d-flex justify-content-between align-items-center">
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</main>
        </>
    )
}