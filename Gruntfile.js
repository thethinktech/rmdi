module.exports = function(grunt) {
// Project configuration.
 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  clean: {
    build: {
      src: ["rmdiui/"]
    }
  },
    copy: {
     main:{
      files:[
       {expand: true, cwd: 'app/', src: ['css/**','fonts/**','img/**'], dest: 'rmdiui/'},
       {expand: true, cwd: 'app/', src: ['bower_components/requirejs/require.js'], dest: 'rmdiui/'},
       {expand: true, cwd: 'app/', src: [ 'index.html'], dest: 'rmdiui/'}
      ]
    },
  },
  requirejs: {
      build: {
        options: {
          baseUrl: 'app/scripts',
          mainConfigFile: 'app/scripts/main.js',
          //removeCombined: true,
          // findNestedDependencies: true,
          optimize: 'uglify2',
          skipDirOptimize: false,
          dir: 'rmdiui/scripts/',
          // fileExclusionRegExp: '\w+(\.html)',
          modules: [
            { name: 'app'
            },
            {   
              name: 'modules/clientAdmin/login/loginCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/clientAdmin/dashboard/dashboardCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/clientAdmin/dashboard/userManagement/userManagementCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/clientAdmin/dashboard/userManagement/addUser/addUserCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/clientAdmin/dashboard/profileManagement/profileManagementCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/clientAdmin/dashboard/profileManagement/profileBuilder/profileBuilderCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/user/userCtrl',
              exclude: ['appcommons']
            },
            {
              name: 'modules/superAdmin/superAdminCtrl',
              exclude: ['appcommons']
            }
          ]
        }
      }
    },
    uglify: {
      deploy: {
        options: {
          preserveComments: 'some'
          // sourceMapIncludeSources: true,
          // sourceMap: true
        },
        files: [
          {
            cwd: 'rmdiui/scripts/', expand: true,
            dest: 'rmdiui/scripts/',
            src: '**/*.js'
          }
        ]
      }
    }
   
  

 });

 grunt.loadNpmTasks('grunt-bower-task');
 grunt.loadNpmTasks('grunt-contrib-clean');
 grunt.loadNpmTasks('grunt-contrib-requirejs');
 grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.registerTask('default', ['clean','requirejs','copy']);

};