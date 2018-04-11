module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		 /** Sass **/
		sass: {
		  dev: {
			options: {
			  style: 'expanded',
			  sourcemap: 'none',
			},
			files: {
			  'style.css': 'scss/style.scss'
			}
		  }
		},
		htmlhint: {
		  html1: {
		    options: {
		      'tag-pair': true
		    },
		    src: ['**/*.html']
		  }
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					livereload: true
		  		}
			}
	  	},
	  			
		 /** Watch **/
		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			css: {
				files: '**/*.scss', 
				tasks: ['sass']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['connect', 'watch']);
};