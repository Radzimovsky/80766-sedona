"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    clean: {
      build: ["build"]
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src",
          src: [
            "img/**",
            "index.html",
            "form.html",
            "blog.html",
            "post.html"
          ],
          dest: "build"
        }]
      }
    },

    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "css/*.css"
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  };



  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);


  grunt.registerTask("build", [
    "clean",
    "copy"
  ])

};
