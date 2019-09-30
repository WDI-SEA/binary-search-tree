# A node in a Binary Tree has data, left, and right pointers
# The left and right pointers are intialized as null
class BinaryNode:
    def __init__(self, data):
      self.left = None
      self.right = None
      self.data = data


class BinaryTree:
    # When a new Tree is initialized, it has a null root property
    # This means the Tree begins as empty
    def __init__(self):
        self.root = None

    # Insert creates a new Node from the data passed in and adds it to the tree
    # If the data is already in the tree, do not insert it again
    def insert(self, data):
        new_node = BinaryNode(data)
        if not self.root:
            self.root = new_node
            return

        walker = self.root
        while walker:
            if data < walker.data:
                if not walker.left:
                    walker.left = new_node
                    return
                else: walker = walker.left
            elif data > walker.data:
                if not walker.right:
                    walker.right = new_node
                    return
                else: walker = walker.right

    # Search the Tree for a node with the given value
    # If the node exists, return it
    # If the node doesn't exist, return false
    def search(self, val):
        if not self.root:
            return False

        walker = self.root
        while walker:
            if val < walker.data:
                walker = walker.left
            elif val > walker.data:
                walker = walker.right
            else: return walker

        return False #  Outside loop means we did not find it!

    # Calculate the number of nodes in the tree, starting from the given node
    # If no node is provided, we can use the root as a sensible default
    # def size(self, node=None):
    #     if not node:
    #         node = self.root

    #     count = 0
    #     def recursive_size(node):
    #         if node:
    #             count += 1
    #             recursive_size(node.left)
    #             recursive_size(node.right)
    #     recursive_size(node)
    #     return count

    # Return the maximum data value stored in the tree
    def getMax(self):
        if not self.root:
            return None

        walker = self.root
        while walker.right:
            walker = walker.right

        return walker.data

    # Calculate the maximum amount of nodes in any one path from the given node
    # If not given a specific node, default to using the root node
    # def height(self, node=None):
    #     if not node:
    #         node = self.root

    #     max_height = 0
    #     def recursive_height(node, height=1):
    #         global max_height
    #         print(max_height)
    #         if node:
    #             if height > max_height:
    #                 max_height = height

    #             recursive_height(node.left, height + 1)
    #             recursive_height(node.right, height + 1)


    #     recursive_height(node)
    #     return max_height

# Some Test Code
my_bst = BinaryTree()
my_bst.insert(5)
my_bst.insert(2)
my_bst.insert(1)
my_bst.insert(3)
my_bst.insert(10)
my_bst.insert(7)
my_bst.insert(6)
my_bst.insert(9)
my_bst.insert(8)
my_bst.insert(4)
print('Height', my_bst.height())
print('Size', my_bst.size())
print('Max Val', my_bst.getMax())
