import React, { Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from "../../image"
import Rolltext from "../rolltext"

import "./homedescr.scss"

const HomeDescr = props => {
  return (
    // <StaticQuery
    //   query={query}
    //   render={data => (
    //     <Fragment>
    <div className={`descr`}>
      <div className={`d-section`}>
        <div className="middle cols">
          <p className={`dropcap`}>
            Above, the stars were unwinking, also constant. Suns and worlds by
            the million. Dizzying constellations, cold fire in every hue. As he
            watched, the sky washed from violet to ebony. A meteor etched a
            brief, spectacular arc below Old Mother and winked out. The fire
            threw strange shadows as the devil-grass burned its slow way down
            into new patterns - not ideograms but a straightforward crisscross
            vaguely frightening in its own no-nonsense surety. He had laid his
            fuel in a pattern that was not artful but only workable. It spoke of
            blacks and whites. It spoke of a man who might straighten bad
            pictures in strange hotel rooms. The fire burned its steady, slow
            flame, and phantoms danced in its incandescent core. The gunslinger
            did not see. He slept. The two patterns, art and craft, were welded
            together. The wind moaned. Every now and then a perverse downdraft
            would make the smoke whirl and eddy toward him, and sporadic whiffs
            of the smoke touched him. They built dreams in the same way that a
            small irritant may build a pearl in an oyster. Occasionally the
            gunslinger moaned with the wind. The stars were as indifferent to
            this as they were to wars, crucifixions, resurrections. This also
            would have pleased him.
            {/* <div className="image">
              <Image src={"gunslinger.jpg"} maxWidth={200}></Image>
            </div> */}
          </p>
        </div>
        <div className="sidetext">
          <i>An excerpt from the book 'The Gunslinger' by Stephen King.</i>
        </div>
      </div>
      <div className={`d-section`}>
        <div className={`subheading middle`}>
          <Rolltext
            items={[`Hello`, `Bonjour`, `Hola`, `Privet`, `Konichiwa`]}
          ></Rolltext>
        </div>
      </div>
    </div>
    //     </Fragment>
    //   )}
    // />
  )
}

export default HomeDescr
