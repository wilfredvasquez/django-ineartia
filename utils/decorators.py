from functools import wraps


def validate_csrf_from_mobile(view_func):
    """Mark a view function as being exempt from the CSRF view protection."""
    # view_func.csrf_exempt = True would also work, but decorators are nicer
    # if they don't have side effects, so return a new function.
    def wrapped_view(request, *args, **kwargs):
        return view_func(request, *args, **kwargs)
    wrapped_view.csrf_exempt = True
    return wraps(view_func)(wrapped_view)
