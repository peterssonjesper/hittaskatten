class SignupController

  def initialize(request, params)
    @request = request
    @params = params
  end

  def signup
    {
      status: 200,
      message: "Hej hej"
    }
  end

end
