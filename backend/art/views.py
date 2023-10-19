from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArtSerlializer
from .models import Art





@api_view(['GET'])
def art_list(request):
    art = Art.objects.all()
    serializer = ArtSerlializer(art, many=True, context={'request': request})
    return Response(serializer.data)
