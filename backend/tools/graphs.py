from utils import Stack, Queue

class Graph:
    """Represent a graph as a dictionary of vertices mapping labels to edges."""
    def __init__(self):
        self.vertices = {}

    def add_vertex(self, vertex):
        """
        Add a vertex to the graph.
        """
        # 1
        self.vertices[vertex] = set()
        
    def add_edge(self, v1, v2):
        """
        Add a directed edge to the graph.
        """
        if v1 not in self.vertices:
            self.add_vertex(v1)

        if v2 not in self.vertices:
            self.add_vertex(v2)
        
        self.vertices[v1].add(v2)

    def bft(self, starting_vertex):
        """
        Print each vertex in breadth-first order
        beginning from starting_vertex.
        """
        # make a queue
        queue = Queue()
        # make a visited set
        visited = set()
        # put Starting Vertex in the queue
        queue.enqueue(starting_vertex)
        # While queue isn't empty
        while queue.size():
            # dequeue the item, it is our current item
            node = queue.dequeue()
            # print(node)
            # mark Current as Visited
            visited.add(node)
            # for all dequeued item's edges
            for edge in self.vertices[node]:
            # if not visited
                if edge not in visited:
            # put them in queue
                    queue.enqueue(edge)

    def dft(self, starting_vertex):
        """
        Print each vertex in depth-first order
        beginning from starting_vertex.
        """
        # make a stack
        stack = Stack()
        # make a visited set
        visited = set()
        # put starting vertex in the stack
        stack.push(starting_vertex)
        # while the stack isn't empty
        while stack.size():
            # Pop off the top of the stack, it is current item
            node = stack.pop()
            # if node isn't visited
            if node not in visited:
                print(node)
                # mark as visited
                visited.add(node)
                # for each of our current item's edges
                for edge in self.vertices[node]:
                    stack.push(edge)

    def dft_recursive(self, starting_vertex, visited = set()):
        """
        Print each vertex in depth-first order
        beginning from starting_vertex.
        This should be done using recursion.
        """
        # no need for stack b/c of recursion
        # take starting_vertex as given
        # if node hasn't been visited:
        if starting_vertex not in visited:
            # mark as visited
            visited.add(starting_vertex)
            print(starting_vertex)
        # for each of this node's neighbors:
            for neighbor in self.vertices[starting_vertex]:
        # call dft_recursive
                self.dft_recursive(neighbor, visited)

    def bfs(self, starting_vertex, destination_vertex):
        """
        Return a list containing the shortest path from
        starting_vertex to destination_vertex in
        breath-first order.
        """
        # make a queue
        queue = Queue()
        # make a visited set
        visited = set()
        # enqueue the PATH to that node
        queue.enqueue([starting_vertex])
        # While queue isn't empty
        while queue.size():
            # dequeue the PATH
            path = queue.dequeue()
            # the last thing in the path is our current item
            node = path[-1]
            # if node is not visited:
            if node not in visited:
                # CHECK if it's the target
                if node == destination_vertex:
                    # if so, return the path
                    return path
                visited.add(node)
                # for each of the node's neighbor's
                for neighbor in self.vertices[node]:
                    #copy the path
                    PATH_COPY = path.copy()
                    # add neighbor to the path
                    PATH_COPY.append(neighbor)
                    # enqueue the PATH_COPY
                    queue.enqueue(PATH_COPY)
        return None

    def dfs(self, starting_vertex, destination_vertex):
        """
        Return a list containing a path from
        starting_vertex to destination_vertex in
        depth-first order.
        """
        # make a stack
        stack = Stack()
        # make a visited set
        visited = set()
        # push the PATH to that node
        stack.push([starting_vertex])
        # while the stack isn't empty
        while stack.size():
            # pop the PATH
            path = stack.pop()
            # the last thing in the path is our current item
            node = path[-1]
            # if node is not visited:
            if node not in visited:
                # CHECK if it is the target
                if node == destination_vertex:
                    return path
                visited.add(node)
                for neighbor in self.vertices[node]:
                    #copy the path
                    PATH_COPY = path.copy()
                    # add neighbor to the path
                    PATH_COPY.append(neighbor)
                    # enqueue the PATH_COPY
                    stack.push(PATH_COPY)
        return None