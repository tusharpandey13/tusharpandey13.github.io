import React from "react"
import Rolltext from "../rolltext"

import "./homedescr.scss"

const HomeDescr = props => {
  let scroll_text_links = {
    Student: "https://www.linkedin.com/in/tushar-pandey-376a51134/",
    "Web Developer": "https://github.com/tusharpandey13/",
    "Python tinkerer": "https://github.com/tusharpandey13/",
    "Arch enthusiast":
      "https://www.reddit.com/r/unixporn/comments/fr7q97/kde_clean_and_simple_the_way_i_like_it/",
    "Homo Sapien": "https://en.wikipedia.org/wiki/Human",
    "Someone looks interested...":
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Arctic Monkeys": "https://g.co/kgs/73nMmA",
    Lorde: "https://g.co/kgs/so9nJa",
    "Creedence Clearwater": "https://www.youtube.com/watch?v=g4flAZEgtjs",
    Seinfeld: "https://www.imdb.com/title/tt0098904/",
    "Breaking Bad": "https://www.imdb.com/title/tt0903747/",
    "The Wire": "https://www.imdb.com/title/tt0306414/",
    "True Detective": "https://www.imdb.com/title/tt2356777/",
    "Hodor!": "https://www.imdb.com/title/tt0944947/",
    "The Dark Tower": "https://www.goodreads.com/series/40750-the-dark-tower",
    "You're a wizard, Harry!":
      "https://www.goodreads.com/series/45175-harry-potter",
    Dishonored: "https://store.steampowered.com/app/403640/Dishonored_2/",
    "Ezio Auditore da Firenze":
      "https://assassinscreed.fandom.com/wiki/Ezio_Auditore_da_Firenze",
  }
  return (
    <div className={`descr`}>
      {props.children}
      <div className={`d-section`}>
        <div className={`subheading middle`}>
          <Rolltext items={scroll_text_links}></Rolltext>
        </div>
      </div>
    </div>
  )
}

export default HomeDescr

// let story_text = (
//   <div className={`d-section`}>
//     <div className="middle cols ">
//       <p className={`dropcap`}>
//         Above, the stars were unwinking, also constant. Suns and worlds by the
//         million. Dizzying constellations, cold fire in every hue. As he watched,
//         the sky washed from violet to ebony. A meteor etched a brief,
//         spectacular arc below Old Mother and winked out. The fire threw strange
//         shadows as the devil-grass burned its slow way down into new patterns -
//         not ideograms but a straightforward crisscross vaguely frightening in
//         its own no-nonsense surety. He had laid his fuel in a pattern that was
//         not artful but only workable. It spoke of blacks and whites. It spoke of
//         a man who might straighten bad pictures in strange hotel rooms. The fire
//         burned its steady, slow flame, and phantoms danced in its incandescent
//         core. The gunslinger did not see. He slept. The two patterns, art and
//         craft, were welded together. The wind moaned. Every now and then a
//         perverse downdraft would make the smoke whirl and eddy toward him, and
//         sporadic whiffs of the smoke touched him. They built dreams in the same
//         way that a small irritant may build a pearl in an oyster. Occasionally
//         the gunslinger moaned with the wind. The stars were as indifferent to
//         this as they were to wars, crucifixions, resurrections. This also would
//         have pleased him.
//         {/* <div className="image">
//               <Image src={"gunslinger.jpg"} maxWidth={200}></Image>
//             </div> */}
//       </p>
//     </div>
//     <div className="sidetext ">
//       <div className={`text-C`}>
//         <i>An excerpt from the book 'The Gunslinger' by Stephen King.</i>
//       </div>
//     </div>
//   </div>
// )
