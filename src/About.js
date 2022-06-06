import React from "react";
import forest from './images/forest47.jpg';
import forest1 from './images/forest29931.jpg';

export const About = () => {
    return (
       <>
        <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">First step to mindfulness <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">The threats to nature are as varied as they are complex.<br/>Notice the presence of the wind when you walk about your world.

How do you sense it?

What does it feel like?

The wind travels great distances gathering scents and aromas – can you detect any subtle sense of smell?

Notice the lull between gusts, the stillness, the silence. Then watch the world come alive with joy as the earth’s lungs explode on the atmosphere. Notice as much detail as possible. How does it feel in your body?<br/>Let go of any sense of ‘knowing’ what this phenomenon is; Open to the mystery by asking yourself: What is the wind?
<br/>
Welcome its soft hug, like a lost friend returning.

 </p>
      </div>
      <div class="col-md-5">
       
      <img src={forest} alt='here should be a photo of forest' class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
      </div>
    </div>
    <hr class="featurette-divider"/>
    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">My vision <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">I imagine a healthy, prosperous world in which societies are forever committed to caring for and valuing nature, for the long-term benefit of people and all life on Earth.
       <br/>The warmth of the sun against the skin; a gentle summer breeze; birds singing on a quiet spring morning; the calming sounds of waves lapping against the shore; a beautiful sunset; a grand mountain vista; the broad sweep of lush green valleys; clear blue skies; the stars and the moon at night; the scent of ripe fruit or roses in bloom; the glimmer of light on the ocean; the feel of sand or soil under foot; finding shade in the solidity of a tree; watching birds in flight with their great patterns of movement; the joy of dogs running and playing…

</p>
      </div>
      <div class="col-md-5 order-md-1">
      <img src={forest1} alt='here should be a photo of forest'  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
      </div>
    </div>
     <iframe  src="https://www.youtube.com/embed/WrS6mVO5unE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
     <iframe   src="https://www.youtube.com/embed/rnrK3zxsKdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe   src="https://www.youtube.com/embed/0EUqqSQdsrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe  src="https://www.youtube.com/embed/fwflNTcK0go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
    )
}