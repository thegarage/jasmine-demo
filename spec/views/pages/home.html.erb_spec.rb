require 'rails_helper'

RSpec.describe 'pages/home.html.erb' do
  it 'saves dynamic fixture' do
    render
    save_fixture 'example_dom.html'
  end
end
