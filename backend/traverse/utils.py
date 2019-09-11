def bfs(start_room, map):
    """
    Return a list containing the shortest path from
    starting_vertex to destination_vertex in
    breath-first order.
    """
    visited = set()
    q = Queue()

    q.enqueue([start_room])

    while q.size() > 0:
        # dequeue the path
        path = q.dequeue()
        node = path[-1]

        if node not in visited:
            visited.add(node)
            # Check if it contains a "?"
            if "?" in map[node].values():
                return path

            for neighbor in map[node].values():
                # print(f"Neighbor found: {neighbor}")
                copy_path = path.copy()
                copy_path.append(neighbor)
                q.enqueue(copy_path)

    return None


class Queue():
    def __init__(self):
        self.queue = []

    def __repr__(self):
        return f"Queue: {self.queue}"

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None

    def size(self):
        return len(self.queue)