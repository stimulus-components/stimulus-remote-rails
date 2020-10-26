# Stimulus Remote Rails

[![](https://img.shields.io/npm/dt/stimulus-remote-rails.svg)](https://www.npmjs.com/package/stimulus-remote-rails)
[![](https://img.shields.io/npm/v/stimulus-remote-rails.svg)](https://www.npmjs.com/package/stimulus-remote-rails)
[![](https://github.com/stimulus-components/stimulus-remote-rails/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-remote-rails)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-remote-rails.svg)](https://github.com/stimulus-components/stimulus-remote-rails)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ac728feb-ab47-48c9-b178-bbc7ca0ddc53/deploy-status)](https://stimulus-remote-rails.netlify.com)

## Getting started

A Stimulus controller to handle [Rails UJS events](https://guides.rubyonrails.org/working_with_javascript_in_rails.html#rails-ujs-event-handlers).

## Installation

```bash
$ yarn add stimulus-remote-rails
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import Remote from "stimulus-remote-rails"

const application = Application.start()
application.register("remote", Remote)
```

## Usage

In your controller:
```ruby
class CommentsController < ApplicationController
  def create
    if @comment.update(comment_params)
      render @comment
    else
      render partial: 'comments/form', status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params
      .require(:comment)
      .permit(:content)
  end
end
```

In your view:
```ruby
<%= form_with model: @comment, data: { controller: 'remote', action: 'ajax:success->remote#append ajax:error->remote#replace' } do |f| %>
  <% if f.object.errors.any? %>
    <% f.object.errors.full_messages.each do |error| %>
      <p><%= error %></p>
    <% end %>
  <% end %>

  <%= f.label :content %>
  <%= f.text_field :content %>

  <%= f.submit 'Save comment' %>
<% end %>
```

You can use `append` or `replace` methods with the events of your choice.

You can use it with all [remote elements available in Rails UJS](https://guides.rubyonrails.org/working_with_javascript_in_rails.html#remote-elements).

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.

```js
import Remote from "stimulus-remote-rails"

export default class extends Remote {
  connect() {
    super.connect()
    console.log("Do what you cant here.")
  }
}
```

These controllers will automatically have access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
