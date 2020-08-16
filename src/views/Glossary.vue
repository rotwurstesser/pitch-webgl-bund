<template>
  <div>
    <h1>Glossary</h1>

    <info-box class="my-8 mb-16">
      <p>
        Some elements might not be fully available or configured in this
        prototype. The Elements below serve as an example of how the
        documentation would look like.
      </p>
    </info-box>

    <div class="mb-24">
      <h2>Table of contents</h2>
      <ul>
        <li><a href="#atomic-design">Atomic design</a></li>
        <li><a href="#atoms">Atoms</a></li>
        <li><a href="#bem">BEM</a></li>
        <li><a href="#design-system">Design system</a></li>
        <li><a href="#molecules">Molecules</a></li>
        <li><a href="#organisms">Organisms</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#vrt">VRT</a></li>
      </ul>
    </div>

    <h3 id="design-system">Design System</h3>
    <p class="mb-12">
      A design system offers a library of visual style, components, and other
      concerns documented and released by an individual, team or community as
      code and design tools so that adopting products can be more efficient
      and cohesive.
    </p>

    <h3 id="atomic-design">Atomic design</h3>
    <div class="mb-12">
      <p class="mb-4">
        Atomic design provides a clear methodology for crafting design systems. 
        Clients and team members are able to better appreciate the concept of design 
        systems by actually seeing the steps laid out in front of them.
      </p>
      <p class="mb-4">
        Atomic design gives us the ability to traverse from abstract to concrete. 
        Because of this, we can create systems that promote consistency and scalability 
        while simultaneously showing things in their final context. 
        By assembling rather than deconstructing, we’re crafting a system right out 
        of the gate instead of cherry picking patterns after the fact.
      </p>
      
      <p>There are five distinct levels in atomic design:</p>
      <a href="#atoms">Atoms</a>,
      <a href="#molecules">Molecules</a>,
      <a href="#organisms">Organisms</a>,
      <a href="#templates">Templates</a> and
      <a href="#pages">Pages</a>.
    </div>

    <h3 id="atoms">Atoms</h3>
    <div class="mb-12">
      <p class="mb-4">
        Atoms are the basic building blocks of matter. Applied to web interfaces, 
        atoms are our HTML tags, such as a form label, an input or a button.
      </p>
      <p class="mb-4">
        Atoms can also include more abstract elements like color palettes, fonts
        and even more invisible aspects of an interface like animations.
      </p>
      <p class="mb-4">
        Like atoms in nature they’re fairly abstract and often not terribly useful
        on their own. However, they’re good as a reference in the context of a
        pattern library as you can see all your global styles laid out at a glance.
      </p>
    </div>

    <h3 id="molecules">Molecules</h3>
    <div class="mb-12">
      <p class="mb-4">
        Things start getting more interesting and tangible when we start combining 
        atoms together. Molecules are groups of atoms bonded together and are the 
        smallest fundamental units of a compound.
      </p>
      <p class="mb-4">
        These molecules take on their own properties and serve as 
        the backbone of our design systems. For example, a form label, input or button
        aren’t too useful by themselves, but combine them together as a form and now 
        they can actually do something together.
      </p>
      <p class="mb-4">
        Building up to molecules from atoms encourages a “do one thing and do it well” 
        mentality. While molecules can be complex, as a rule of thumb they are relatively 
        simple combinations of atoms built for reuse.
      </p>
    </div>

    <h3 id="organisms">Organisms</h3>
    <div class="mb-12">
      <p class="mb-4">
        Molecules give us some building blocks to work with, and we can now combine 
        them together to form organisms. Organisms are groups of molecules joined 
        together to form a relatively complex, distinct section of an interface.
      </p>
      <p class="mb-4">
        Organisms can consist of similar and/or different molecule types. 
        For example, a masthead organism might consist of diverse components like a
        logo, primary navigation, search form, and list of social media channels. 
        But a “product grid” organism might consist of the same molecule (possibly
        containing a product image, product title and price) repeated over and over again.
        Building up from molecules to organisms encourages creating standalone, 
        portable, reusable components.
      </p>
    </div>

    <h3 id="templates">Templates</h3>
    <div class="mb-12">
      <p class="mb-4">
        At the template stage, we break our chemistry analogy to get into language 
        that makes more sense to our clients and our final output.
      </p>
      <p class="mb-4">
        Templates consist mostly of groups of organisms stitched together to form pages. 
        It’s here where we start to see the design coming together and start seeing things 
        like layout in action.
      </p>
    </div>

    <h3 id="pages">Pages</h3>
    <div class="mb-12">
      <p class="mb-4">
        Pages are specific instances of templates. Here, placeholder content is 
        replaced with real representative content to give an accurate depiction of what
        a user will ultimately see.
      </p>
      <p class="mb-4">
        Pages are the highest level of fidelity and because they’re the most tangible, 
        it’s typically where most people in the process spend most of their time and 
        what most reviews revolve around.
      </p>
      <p class="mb-4">
        The page stage is essential as it’s where we test the effectiveness of the 
        design system. Viewing everything in context allows us to loop back to modify 
        our molecules, organisms, and templates to better address the real context of 
        the design.
      </p>
    </div>

    <h3 id="bem">BEM</h3>
    <div class="mb-12">
      <p class="mb-4">
        BEM (<strong>B</strong>lock, <strong>E</strong>lement, <strong>M</strong>odifier)
        is a CSS organizing methodology.
      </p>
      <p class="mb-4">
        It provides solutions for all the frontend technologies: CSS, JavaScript, 
        templating; and also for building process of your web application. 
        The methodology is applicable anywhere. However, to apply this in JavaScript 
        and templating you would need special frameworks whereas in CSS you may just 
        follow the methodological recommendations.
      </p>
      <p class="mb-4">
        The CSS part of BEM is the easiest to take into your development process. 
        This is why many use only it. On the other hand, if lately you would found your
        project fully BEMed (in CSS) and yourself happy for its grown maintenance, 
        you probably would take next step in modularizing your web application. 
        BEM CSS will be easier to coordinate with modular JavaScript and blocks-based 
        project file structure.
      </p>
    </div>

    <h3 id="vrt">VRT</h3>
    <div class="mb-12">
      <p class="mb-4">
        Visual tests, also called visual regression tests, catch bugs in UI appearance. 
        They work by taking screenshots of every story and comparing them commit-to-commit
        to identify changes.<br>
        This is ideal for verifying what the user sees: layout, color, size, and contrast.
      </p>
    </div>
  </div>
</template>
<script>
import InfoBox from "../components/InfoBox.vue";
export default {
  components: { InfoBox }
};
</script>
