<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180423105401 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE classification DROP FOREIGN KEY FK_456BD2319393F8FE');
        $this->addSql('DROP INDEX IDX_456BD2319393F8FE ON classification');
        $this->addSql('ALTER TABLE classification DROP partner_id');
        $this->addSql('ALTER TABLE partner ADD classification_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE partner ADD CONSTRAINT FK_312B3E162A86559F FOREIGN KEY (classification_id) REFERENCES classification (id)');
        $this->addSql('CREATE INDEX IDX_312B3E162A86559F ON partner (classification_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE classification ADD partner_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE classification ADD CONSTRAINT FK_456BD2319393F8FE FOREIGN KEY (partner_id) REFERENCES partner (id)');
        $this->addSql('CREATE INDEX IDX_456BD2319393F8FE ON classification (partner_id)');
        $this->addSql('ALTER TABLE partner DROP FOREIGN KEY FK_312B3E162A86559F');
        $this->addSql('DROP INDEX IDX_312B3E162A86559F ON partner');
        $this->addSql('ALTER TABLE partner DROP classification_id');
    }
}
