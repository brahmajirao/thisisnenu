from flask_restful import Resource
from myproject.models.memories import Memory
class Memories(Resource):
    def get(self):
        memories = Memory.query.all()
        output = []
        for memory in memories:
            createdDate = memory.created_date
            updatedDate = memory.updated_date
            outputObj = {
                'id': memory.memory_id,
                'title': memory.title,
                'description': memory.description,
                'coverImage': memory.cover_image,
                'createdDate': createdDate.strftime('%Y-%m-%d %H:%M:%S'),
                'updatedDate': updatedDate.strftime('%Y-%m-%d %H:%M:%S')
            }
            output.append(outputObj)
        return output