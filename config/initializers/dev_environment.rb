unless Rails.env.production?
  ENV['secret_key_base'] = 'testing'
end