# jasmine-demo rails app

```bash
$ rails s
$ open http://localhost:3000/specs
```

Example Source Code:
* [app/assets/javascripts/example_dom.js](blob/master/app/assets/javascripts/example_dom.js)
* [app/assets/javascripts/example_ajax.js](blob/master/app/assets/javascripts/example_ajax.js)

Example Tests:
* [spec/javascripts/example_dom_spec.js](blob/master/spec/javascripts/example_dom_spec.js)
* [spec/javascripts/example_ajax_spec.js](blob/master/spec/javascripts/example_ajax_spec.js)


## The Basics

Tools:
* [Jasmine](http://jasmine.github.io/)
* [Jasmine-Rails](https://github.com/searls/jasmine-rails)
* [Jasmine-Jquery](https://github.com/velesin/jasmine-jquery)
* [Jasmine-ajax](http://jasmine.github.io/2.0/ajax.html)

#### Running the tests from command line
```bash
# basic command line runner
$ rake spec:javascripts RAILS_ENV=test

# filter command line tests
$ rake spec:javascripts SPEC=my_feature.js RAILS_ENV=test
```

#### Structure Similar to RSpec
* `describe`
* `it`
* `expect`
* `beforeEach`

#### Matchers
* All matchers can be used for a negative assertion using the `.not` method
* [Core Jasmine Matchers](http://jasmine.github.io/2.0/introduction.html#section-Matchers)
* [Jasmine-jQuery matchers](https://github.com/velesin/jasmine-jquery#jquery-matchers)
* [Custom Matchers](http://jasmine.github.io/2.0/custom_matcher.html)

#### Spies
* [Jasmine Spies](http://jasmine.github.io/2.0/introduction.html#section-Spies)
* [Jasmine-jQuery event spies](https://github.com/velesin/jasmine-jquery#event-spies)
* very similar to the RSpec mocking frameworks.
* set expectations on method invocations (ex: external libraries, alerts, etc)

#### Fixtures
* [Jasmine-Jquery fixtures](https://github.com/velesin/jasmine-jquery#html-fixtures)
* fixtures are typically used for HTML snippets, but they are also useful for external CSS/JSON resources.
* add [spec/javascripts/helpers/jasmine_rails_fixture_path.js]() to spec_helper.js
  to setup Rails asset pipeline paths.
* [Dynamic Fixtures w/ RSpec](http://codecrate.com/2014/02/jasmine-dynamic-fixtures.html)

#### Ajax Testing
* [Jasmine-ajax repo](https://github.com/pivotal/jasmine-ajax)
* NOTE: **you must load all HTML fixtures before you "install" the ajax library in your test** since HTML fixtures are
  loaded via Ajax requests and the jasmine-ajax library will intercept all requests once it is installed.
