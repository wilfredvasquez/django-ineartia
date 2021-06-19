from inertia.share import share


class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):

        if request.user.is_authenticated: 
            share(request, 'auth', {
                    'user':{
                        'id': request.user.id,
                        'firt_name': request.user.first_name,
                        'last_name': request.user.last_name,
                        'email': request.user.email,
                        'username': request.user.username,
                    }
                })
        else:
            share(request, 'auth', {
                    'user':{
                        'id': "",
                        'firt_name': "",
                        'last_name': "",
                        'username': "",
                    }
                })
        response = self.get_response(request)
        return response