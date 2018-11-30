from flask_restful import Resource, reqparse
from myproject.models.memories import Memory as MemoryDb
class Memories(Resource):
    def get(self):
        memories = MemoryDb.query.all()
        output = []
        for memory in memories:
            createdDate = memory.created_date
            updatedDate = memory.updated_date
            min_description = (memory.description[:100] + '..') if len(memory.description) > 100 else memory.description
            thumb = 'http://127.0.0.1:5000/static/images/default_thumb.png'
            if len(memory.cover_image)>0:
                thumb = 'http://127.0.0.1:5000/images/memories/' + memory.cover_image

            outputObj = {
                'id': memory.memory_id,
                'title': memory.title,
                'description': min_description,
                'coverImage': thumb,
                'createdDate': createdDate.strftime('%Y-%m-%d %H:%M:%S'),
                'updatedDate': updatedDate.strftime('%Y-%m-%d %H:%M:%S')
            }
            output.append(outputObj)
        return output

class Memory(Resource):
    def get(self, id):
        memoryDetails = MemoryDb.query.get(id)
        output = None
        if memoryDetails is not None:
            createdDate = memoryDetails.created_date
            updatedDate = memoryDetails.updated_date
            thumb = 'http://127.0.0.1:5000/static/images/default_thumb.png'
            if len(memoryDetails.cover_image) > 0:
                thumb = 'http://127.0.0.1:5000/images/memories/' + memoryDetails.cover_image

            output = {
                'id': memoryDetails.memory_id,
                'title': memoryDetails.title,
                'description': memoryDetails.description,
                'coverImage': thumb,
                'createdDate': createdDate.strftime('%Y-%m-%d %H:%M:%S'),
                'updatedDate': updatedDate.strftime('%Y-%m-%d %H:%M:%S')
            }

        return output
    def put(self, id):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int)
        parser.add_argument('title', type=str)
        parser.add_argument('description', type=str)
        args = parser.parse_args()
        #todo save to db
        return args
