require 'rails_helper'

RSpec.describe StudentResource, type: :resource do
  describe 'serialization' do
    let!(:student) { create(:student) }

    it 'works' do
      render
      data = jsonapi_data[0]
      expect(data.id).to eq(student.id)
      expect(data.jsonapi_type).to eq('students')
    end
  end

  describe 'filtering' do
    let!(:student1) { create(:student) }
    let!(:student2) { create(:student) }

    context 'by id' do
      before do
        params[:filter] = { id: { eq: student2.id } }
      end

      it 'works' do
        render
        expect(d.map(&:id)).to eq([student2.id])
      end
    end
  end

  describe 'sorting' do
    describe 'by id' do
      let!(:student1) { create(:student) }
      let!(:student2) { create(:student) }

      context 'when ascending' do
        before do
          params[:sort] = 'id'
        end

        it 'works' do
          render
          expect(d.map(&:id)).to eq([
            student1.id,
            student2.id
          ])
        end
      end

      context 'when descending' do
        before do
          params[:sort] = '-id'
        end

        it 'works' do
          render
          expect(d.map(&:id)).to eq([
            student2.id,
            student1.id
          ])
        end
      end
    end
  end

  describe 'sideloading' do
    # ... your tests ...
  end
end
