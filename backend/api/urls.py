from django.urls import path, include
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from api.views import ContactViewSet
from api.views import RegisterView

router = routers.DefaultRouter()
router.register(r'contacts', ContactViewSet, basename='contact')


urlpatterns = [
    path('', include(router.urls)),
    # ContactViewSet.as_view, name='contacts'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
]