<template lang="pug">
    footer
        div(v-for="red in networkSocials")
            img(:src="red.icon")
        
</template>

<script>
import telephone from "../assets/images/phone-icon.png";
import email from "../assets/images/gmail-icon.ico";
import github from "../assets/images/github-icon.ico";
import linkendin from "../assets/images/linkedin-icon.ico";
import twitter from "../assets/images/twitter-icon.png";
// import youtube from "../assets/images/youtube-icon.png";

export default {
  name: "footer",
  data: function() {
    return {
      networkSocials: [
        {
          name: "Telefono",
          icon: telephone,
          data: "3504459101",
        },
        {
          name: "Email",
          icon: email,
          data: "jaalorsa519@gmail.com",
        },
        {
          name: "Github",
          icon: github,
          url: "https://github.com/jaalorsa517",
        },
        {
          name: "Linkedin",
          icon: linkendin,
          url:
            "https://www.linkedin.com/in/jaime-alberto-ortiz-saldarriaga-54a3409b",
        },
        {
          name: "Twitter",
          icon: twitter,
          data: "@jaalorsa517",
          url: "https://twitter.com/jaalorsa517",
        },
      ],
    };
  },
};
</script>
