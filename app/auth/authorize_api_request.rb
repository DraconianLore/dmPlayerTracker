class AuthorizeApiRequest
  prepend SimpleCommand

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  private

  attr_reader :headers

  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    # no auth token doesnt get to this point... wtf is going on?
  rescue
    puts '$$$$$'
    return nil
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  rescue ExceptionHandler::DecodeError => error
    raise error
  end
  
  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    else errors.add(:token, 'Missing token')
    end
    nil
  end
end
