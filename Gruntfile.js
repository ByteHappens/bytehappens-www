module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      cache: [".cache/**"],
      dev: [".dev/**"],
      build: [".build/**", ".dist/**"]
    },
    shell: {
      build: {
        command: "npm run bundle"
      },
      deploy: {
        command: "npm run publish"
      }
    },
    copy: {
      build: {
        files: [{ expand: true, cwd: ".build", src: "**/*", dest: ".dist/" }, { expand: true, cwd: "static", src: "**/*", dest: ".dist/" }]
      }
    }
  });

  // Default task(s).
  grunt.registerTask("default", []);
  grunt.registerTask("cleanAll", ["clean:cache", "clean:build", "clean:dev"]);
  grunt.registerTask("build", ["clean:build", "shell:build", "copy:build"]);
  grunt.registerTask("deploy", ["shell:deploy"]);
};
